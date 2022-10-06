let inventory = newInventory();

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', function() {
        item.remove();
        let inventoryItem = document.createElement('img');
        inventoryItem.src = url;
        inventory.append(inventoryItem);
    }) 
}

function addItemToInventory(url) {
    let inventoryItem = document.createElement('img');
    inventoryItem.src = url;
    inventory.append(inventoryItem);
}

function newInventory(){
    let inv = document.createElement('div');
    inv.style.position = 'fixed';
    inv.style.bottom = '0px';
    inv.style.left = '0px';
    inv.style.width = '100%';
    inv.style.height = '100px';
    inv.style.display = 'flex';
    inv.style.flexDirection = 'row';
    inv.style.alignItems = 'center';
    inv.style.justifyContent = 'space-evenly';
    inv.style.border = '2px solid black';
    inv.style.backgroundColor = 'brown';
    document.body.append(inv);
    return inv;
}

//newInventory()
newImage('assets/green-character.gif', 100, 250)
newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/pine-tree.png', 450, 350)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)

newItem('assets/sword.png', 500, 555)
newItem('assets/shield.png', 165, 335)
newItem('assets/staff.png', 600, 250)