import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureAzsadminOfferdelegationApi implements ICredentialType {
        name = 'N8nDevAzureAzsadminOfferdelegationApi';

        displayName = 'Azure Azsadmin Offerdelegation API';

        icon: Icon = { light: 'file:../nodes/AzureAzsadminOfferdelegation/azure-azsadmin-offerdelegation.png', dark: 'file:../nodes/AzureAzsadminOfferdelegation/azure-azsadmin-offerdelegation.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Azsadmin Offerdelegation API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
