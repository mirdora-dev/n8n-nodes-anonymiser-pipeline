import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class AnonymiserPipeline implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Anonymiser Pipeline',
        name: 'anonymiserPipeline',
        icon: 'file:anonymiserpipeline.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={$parameter["operation"]}',
        description: 'Perform anonymiser pipeline operations in n8n',
        defaults: {
            name: 'Anonymiser Pipeline',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'anonymiserPipelineApi',
                required: true,
            },
        ],
        properties: [
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Execute',
                        value: 'execute',
                        description: 'Execute the anonymisation action',
                        action: 'Execute action',
                    },
                ],
                default: 'execute',
            },
        ],
    };
}
