import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class AnonymiserPipelineApi implements ICredentialType {
    name = 'anonymiserPipelineApi';
    displayName = 'Anonymiser Pipeline API';
    documentationUrl = 'https://github.com/mirdora-dev/anonymiser-core-standalone';
    properties: INodeProperties[] = [
        {
            displayName: 'Environment Path',
            name: 'envPath',
            type: 'string',
            default: '',
            description: 'Optional path to custom environment configurations',
        },
    ];
}
