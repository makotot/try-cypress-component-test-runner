import injectDevServer from '@cypress/react/plugins/react-scripts';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (on, config) {
  if (config.testingType === 'component') {
    injectDevServer(on, config);
  }
  return config;
};