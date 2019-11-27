class UserForm {
    constructor() {
        this.username = document.createElement('input');
        this.username.type = 'text';
        this.username.id = 'txt-title';
        this.username.placeholder = 'Enter Username';

        this.btnAdd = document.createElement('input');
        this.btnAdd.type = 'submit';
        this.btnAdd.id = 'btn-add';
        this.btnAdd.value = 'Add user';

        this.div = document.createElement('div');
        this.div.appendChild(this.username);
        this.div.appendChild(this.btnAdd);
        
    }
    getNode(){
        return this.div;
    }   
    setBtnAddOnClick(onClick){
        this.btnAdd.addEventListener('click',onClick);
    }
}

export {
    UserForm
}