var wpnlist;
var genesis;
var gVDepthPointer;
var rVDepthPointer;
var gArr;
var tWeaponType

function ExtractMain(n) {
  tWeaponType = n;
  exType(n);
}


function updateTreeDepth(){
  genesis = new TreeItem(0,0,0,new Array(),null,null,null,0)
  for(var i = 0; i < wpnlist.length; i++){
    if(wpnlist[i].parent_id == 0) {
      console.log("Crawl within updateTreeDepth");
      genesis.children.push(new TreeItem(wpnlist[i].id, 0, 0, null, gVDepthPointer, null, wpnlist[i], null));
    }
  }
  console.log("Added "+genesis.children.length+" children to genesis.")
  for(var i = 0; i < genesis.children.length; i++){
    var tmpWpn = wpnlist.find(obj => {
      return obj.id === genesis.children[i].id;
    })
    crawl(genesis.children[i],0,tmpWpn.family,0);
    gVDepthPointer++;
    rVDepthPointer=0;
  }
}


function crawl(parentItem,lastVerticalDepth,parentFamily,parentDepth) {
  var tmpWpn = wpnlist.find(obj => {
    return obj.id === parentItem.id;
  })
  console.log("Crawling... ID: "+parentItem.id+" Name: "+tmpWpn.name);
  var nextDepth = lastVerticalDepth;
  if(parentFamily !== tmpWpn.family){
    nextDepth++;
    gVDepthPointer++;
    rVDepthPointer++;
  }
  parentItem.vDepth = nextDepth;
  parentItem.globalVDepth = gVDepthPointer;
  if(parentItem.parentId === null) { parentItem.relativeVDepth = null }
  else { parentItem.relativeVDepth = gVDepthPointer - parentDepth }


  if(tmpWpn.children.length<1){
    return;
  }
  else{
    var tmp = new Array();
    for(var i = 0; i < tmpWpn.children.length; i++){
      var tmpWpnChild = wpnlist.find(obj => {
        return obj.id === tmpWpn.children[i].id;
      })
      tmp.push(new TreeItem(tmpWpn.children[i].id, parentItem.hDepth+1, nextDepth, null, gVDepthPointer, parentItem.id, tmpWpnChild, 0));
    }
    parentItem.children = tmp;
    for(var i = 0; i < parentItem.children.length; i++){
      crawl(parentItem.children[i],nextDepth,tmpWpn.family,parentItem.globalVDepth);
    }
  }
}




class TreeItem {
  constructor(id,hDepth,vDepth,children,globalVDepth,parentId,item,relativeVDepth){
    this.id = id;
    this.parentId = parentId;
    this.hDepth = hDepth;
    this.vDepth =  vDepth;
    this.globalVDepth = globalVDepth;
    this.relativeVDepth = relativeVDepth;
    if(item !== null){
      this.data = Object.assign({}, item);
      delete this.data.id;
      delete this.data.parent_id;
      delete this.data.children;
      if(tWeaponType !== 'heavybowgun' && tWeaponType !== 'lightbowgun' && tWeaponType !== 'bow' && tWeaponType !== 'huntinghorn'){
        if(this.data.phial === undefined){
          this.data.phial = null;
        }
        if(this.data.shelling_type === undefined){
          this.data.shelling_type = null;
        }
      }
    } else { this.data = null }
    this.children = children;
  }
}
class LinearizedItem {
  constructor(treeItem){
    this.id = treeItem.id;
    this.parentId = treeItem.parentId;
    this.hDepth = treeItem.hDepth;
    this.vDepth =  treeItem.vDepth;
    this.globalVDepth = treeItem.globalVDepth;
    this.relativeVDepth = treeItem.relativeVDepth;
    this.data = treeItem.data;
  }
}
function linearify(arr){
  for(var i = 0; i<arr.length; i++){
    gArr.push(new LinearizedItem(arr[i]));
    if(arr[i].children !== null){
      linearify(arr[i].children)
    }
  }
}
function exdl(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
function exType(n){
  $.getJSON('../json/weapons/raw/WPN_'+n+'.json', function (data) {
    wpnlist = data;
  }).done( function(data) {
    gVDepthPointer = 0;
    rVDepthPointer = 0;
    updateTreeDepth()
    gArr = new Array();
    linearify(genesis.children);
    //exdl(JSON.stringify(genesis.children), 'TREE_'+n+'.json', 'application/json');
    exdl(JSON.stringify(gArr), 'FLAT_'+n+'.json', 'application/json');
  });
}