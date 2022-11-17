const config = {

    preset: 'jest-expo',
    transformIgnorePatterns: [
        'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@rneui)',
      ],
      transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
      },
      setupFiles: [
        './jestSetupFile.js'],
};

module.exports = config;
