// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

export enum EventName {
    INSIDERS_RELOAD_PROMPT = 'INSIDERS_RELOAD_PROMPT',
    INSIDERS_PROMPT = 'INSIDERS_PROMPT',
    ENVFILE_VARIABLE_SUBSTITUTION = 'ENVFILE_VARIABLE_SUBSTITUTION',
    ENVFILE_WORKSPACE = 'ENVFILE_WORKSPACE',
    PYTHON_EXPERIMENTS = 'PYTHON_EXPERIMENTS',
    PYTHON_EXPERIMENTS_DISABLED = 'PYTHON_EXPERIMENTS_DISABLED',
    PYTHON_EXPERIMENTS_OPT_IN_OUT = 'PYTHON_EXPERIMENTS_OPT_IN_OUT',
    PYTHON_EXPERIMENTS_DOWNLOAD_SUCCESS_RATE = 'PYTHON_EXPERIMENTS_DOWNLOAD_SUCCESS_RATE',
    PLATFORM_INFO = 'PLATFORM.INFO',
    HASHED_PACKAGE_NAME = 'HASHED_PACKAGE_NAME',
    HASHED_PACKAGE_PERF = 'HASHED_PACKAGE_PERF'
}

export enum PlatformErrors {
    FailedToParseVersion = 'FailedToParseVersion',
    FailedToDetermineOS = 'FailedToDetermineOS'
}
