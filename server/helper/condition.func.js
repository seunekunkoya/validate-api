
const isValid = (dataField, condition, condition_value) => {

    let validationResult = false;

    switch (condition) {
        case 'eq':
            if(dataField === condition_value){
                validationResult = true
            }
            break;
        
        case 'neq':
            if(dataField !== condition_value){
                validationResult = true
            }
            break;

        case 'gt':
            if(dataField > condition_value){
                validationResult = true
            }
            break;

        case 'gte':
            if(dataField >= condition_value){
                validationResult = true
            }
            break;

        case 'contains':
            if(dataField.includes(condition_value)){
                validationResult = true
            }                    
        
        default:
            break;
    }

    return validationResult;
}

module.exports = isValid