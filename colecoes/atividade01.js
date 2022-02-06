function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const map = new Map();

map.set('Ronald', 'User');
map.set('Maria', 'Admin');
map.set('Bruno', 'User');
map.set('Lucas', 'Admin');

console.log(getAdmins(map));