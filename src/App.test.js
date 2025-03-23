import { render, screen, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Mock react-modal to provide a valid React component
jest.mock('react-modal', () => {
  const ModalMock = ({ children, isOpen, onRequestClose, className, overlayClassName }) => {
    if (!isOpen) return null;
    return (
      <div className={overlayClassName} onClick={onRequestClose}>
        <div className={className} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };
  ModalMock.setAppElement = jest.fn(); // Mock setAppElement to avoid DOM access
  return ModalMock;
});

// Mock qrcode.react to avoid Canvas API issues
jest.mock('qrcode.react', () => ({
  QRCodeCanvas: () => <div data-testid="qr-code-mock">Mocked QR Code</div>,
}));

// Mock window.alert and navigator.clipboard
jest.spyOn(window, 'alert').mockImplementation(() => {});
Object.defineProperty(global.navigator, 'clipboard', {
  value: {
    writeText: jest.fn().mockImplementation(() => Promise.resolve()),
  },
  writable: true,
});

// Mock window.location for URLSearchParams
const mockLocation = {
  search: '',
  origin: 'http://localhost',
};
Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true,
});

describe('App Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    window.location.search = ''; // Reset search params
  });

  test('renders the app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Running \/ Training Planning/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the route selection list', () => {
    render(<App />);
    const routeItems = screen.getAllByRole('listitem');
    expect(routeItems.length).toBeGreaterThan(0); // At least one route should be rendered
    expect(screen.getByText(/沙田運動場/i)).toBeInTheDocument(); // Check for a specific route
  });

  test('selects a route and displays workout summary', async () => {
    render(<App />);
    
    // Select a route (e.g., 沙田運動場)
    const routeItem = screen.getByText(/沙田運動場/i);
    await userEvent.click(routeItem);

    // Check if the workout summary is displayed
    const summaryTitle = screen.getByText(/Workout Summary/i);
    expect(summaryTitle).toBeInTheDocument();

    // Find the workout summary container and search for the distance within it
    const summaryContainer = screen.getByText(/Workout Summary/i).parentElement;
    const distanceText = within(summaryContainer).getByText(/7.5 km/i);
    expect(distanceText).toBeInTheDocument();
  });

  test('changes pace and updates workout summary', async () => {
    render(<App />);

    // Select a route first to ensure the workout summary is rendered
    const routeItem = screen.getByText(/沙田運動場/i);
    await userEvent.click(routeItem);

    // Click the Pace Min dropdown to open it
    const paceMinutesSelect = screen.getByLabelText(/Pace Min/i);
    await userEvent.click(paceMinutesSelect);

    // Select the "7" option from the dropdown
    const minuteOption = screen.getByRole('option', { name: '7' });
    await userEvent.click(minuteOption);

    // Click the Pace Seconds dropdown to open it
    const paceSecondsSelect = screen.getByLabelText(/Pace Sec/i);
    await userEvent.click(paceSecondsSelect);

    // Select the "00" option from the dropdown
    const secondOption = screen.getByRole('option', { name: '00' });
    await userEvent.click(secondOption);

    // Check if the workout summary updates with the new pace
    const paceText = screen.getByText(/7:00 min\/km/i);
    expect(paceText).toBeInTheDocument();
  });

  test.skip('opens share modal and copies URL', async () => {
    render(<App />);

    // Click the Share button
    const shareButton = screen.getByRole('button', { name: /Share/i });
    await userEvent.click(shareButton);

    // Check if the modal opens
    const modalTitle = screen.getByText(/Share Your Route/i);
    expect(modalTitle).toBeInTheDocument();

    // Verify the mocked QR code is rendered
    const qrCode = screen.getByTestId('qr-code-mock');
    expect(qrCode).toBeInTheDocument();

    // Check if the copy button works
    const copyButton = screen.getByRole('button', { name: /Copy/i });
    await userEvent.click(copyButton);
    expect(navigator.clipboard.writeText).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Copied!');
  });
});