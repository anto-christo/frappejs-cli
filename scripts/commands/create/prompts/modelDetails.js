module.exports = {
    modelDetails: [
        {
            type: 'input',
            name: 'label',
            message: 'Enter model label: ',
        },
        {
            type: 'list',
            name: 'naming',
            message: 'Choose naming type: ',
            choices: [
                'random',
                'autoincrement'
            ],
            default: 'random'
        },
        {
          type: 'confirm',
          name: 'isSingle',
          message: 'Is this a single doctype? ',
          default: false
        },
        {
            type: 'confirm',
            name: 'isChild',
            message: 'Is this a child doctype? ',
            default: false
        }
    ],

    fieldDetails: [
        {
            type: 'input',
            name: 'label',
            message: 'Enter field label: '
        },
        
        {
            type: 'confirm',
            name: 'disabled',
            message: 'Is this a disabled field? ',
            default: false
        },
        {
            type: 'confirm',
            name: 'required',
            message: 'Is this a compulsory field? ',
            default: false
        },
        {
            type: 'list',
            name: 'fieldtype',
            message: 'Choose field type: ',
            choices: [
                'Autocomplete',
                'Currency',
                'Data',
                'Date',
                'File',
                'Float',
                'Int',
                'Link',
                'Password',
                'Select',
                'Table',
                'Text',
                'Time'
            ],
            pageSize: 12,
            default: 'Data'
        }
    ],

    keywordName: {
        type: 'input',
        name: 'option',
        message: 'Enter a keyword field: ',
        default: ''
    },

    fieldName: {
        type: 'input',
        name: 'fieldname',
        message: 'Enter field name: ',
        default: ''
    },

    optionName: {
        type: 'input',
        name: 'option',
        message: 'Enter an option: ',
        default: ''
    },

    targetName: {
        type: 'input',
        name: 'target',
        message: 'Enter name of target doctype: '
    },

    isDirectory: {
        type: 'confirm',
        name: 'directory',
        message: 'Do you want to enable directory selection? ',
        default: false
    }
}