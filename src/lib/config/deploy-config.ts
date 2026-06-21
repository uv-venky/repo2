import type { DeployConfigMap } from 'venky-core/common';

export const AWS_REGION = 'us-east-1';

export const GITHUB_REPO_NAME = 'uv-venky/repo2';

export const deployConfig: DeployConfigMap = {
  DEV: {
    clusterName: 'repo2-dev-cluster',
    serviceName: 'repo2-dev-service',
    label: 'Development',
  },
};
