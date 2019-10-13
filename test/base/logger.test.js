/* Mocks & Stubs */
const mockConfigModule = {};
const mockPino = jest.fn();

jest.mock('../../src/base/config', () => ({
	config: mockConfigModule,
}));
jest.mock('pino', () => mockPino);

describe('the config', () => {
	beforeEach(() => {
		jest.resetModules();
		jest.resetAllMocks();
	});

	test('When the environment is production the logger'
		+ 'doesn\'t prettyPrint.', () => {
		mockConfigModule.env = 'production';

		require('../../src/base/logger');

		expect(mockPino).toBeCalledWith({
			prettyPrint: false,
		});
	});

	test('When the environment is not production the logger'
		+ 'does prettyPrint.', () => {
		mockConfigModule.env = 'development';

		require('../../src/base/logger');

		expect(mockPino).toBeCalledWith({
			prettyPrint: {
				colorize: true,
			},
		});
	});
});
