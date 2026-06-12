import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminOfferdelegation implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Offerdelegation',
                name: 'N8nDevAzureAzsadminOfferdelegation',
                icon: { light: 'file:./azure-azsadmin-offerdelegation.png', dark: 'file:./azure-azsadmin-offerdelegation.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Admin Subscriptions Management Client.',
                defaults: { name: 'Azure Azsadmin Offerdelegation' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminOfferdelegationApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
