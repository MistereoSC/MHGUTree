var wpnlist = new Array();
var genesis;
var gVDepthPointer = 0;
var gArr;

function ExtractMain() {
  //exType("bow");
  //exType("chargeblade");
  //exType("dualblades");
  //exType("greatsword");
  //exType("gunlance");
  //exType("hammer");
  //exType("heavybowgun");
  //exType("huntinghorn");
  //exType("insectglaive");
  //exType("lance");
  //exType("lightbowgun");
  //exType("longsword");
  //exType("switchaxe");
  exType("swordandshield");
}


function linearify(arr){
  for(var i = 0; i<arr.length; i++){
    gArr.push(new LinearizedItem(arr[i]));
    if(arr[i].children !== null){
      linearify(arr[i].children)
    }
  }
}

function updateTreeDepth(){
  genesis = new TreeItem(0,0,0,new Array(),null,null,null)
  for(var i = 0; i < wpnlist.length; i++){
    if(wpnlist[i].parent_id == 0) {
      console.log("Crawl within updateTreeDepth");
      genesis.children.push(new TreeItem(wpnlist[i].id,0,0,null,gVDepthPointer,null,null));
    }
  }
  console.log("Added "+genesis.children.length+" children to genesis.")
  for(var i = 0; i < genesis.children.length; i++){
    var tmpWpn = wpnlist.find(obj => {
      return obj.id === genesis.children[i].id;
    })
    crawl(genesis.children[i],0,tmpWpn.family);
    gVDepthPointer++;
  }
}
function crawl(parentItem,lastVerticalDepth,parentFamily) {
  var tmpWpn = wpnlist.find(obj => {
    return obj.id === parentItem.id;
  })
  console.log("Crawling... ID: "+parentItem.id+" Name: "+tmpWpn.name);
  var nextDepth = lastVerticalDepth;
  if(parentFamily !== tmpWpn.family){
    nextDepth++;
    gVDepthPointer++;
  }
  parentItem.vDepth = nextDepth;
  parentItem.globalVDepth = gVDepthPointer;
  parentItem.name = tmpWpn.name;
  console.log(parentFamily+"|"+tmpWpn.family)


  if(tmpWpn.children.length<1){
    console.log("Return without children...");
    return;
  }
  else{
    console.log(tmpWpn.children.length+" children.");
    var tmp = new Array();
    for(var i = 0; i < tmpWpn.children.length; i++){
      tmp.push(new TreeItem(tmpWpn.children[i].id,parentItem.hDepth+1,nextDepth,null,gVDepthPointer,null,parentItem.id));
    }
    parentItem.children = tmp;
    for(var i = 0; i < parentItem.children.length; i++){
      crawl(parentItem.children[i],nextDepth,tmpWpn.family);
    }
  }
}
class TreeItem {
  constructor(id,hDepth,vDepth,children,globalVDepth,name,parentId){
    this.id = id;
    this.name = name;
    this.parentId = parentId;
    this.hDepth = hDepth;
    this.vDepth =  vDepth;
    this.globalVDepth = globalVDepth;
    this.children = children;
  }
}
class LinearizedItem {
  constructor(treeItem){
    this.id = treeItem.id;
    this.name = treeItem.name;
    this.parentId = treeItem.parentId;
    this.hDepth = treeItem.hDepth;
    this.vDepth =  treeItem.vDepth;
    this.globalVDepth = treeItem.globalVDepth;
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
  $.getJSON('../../public/json/weapons/WPN_'+n+'.json', function (data) {
    wpnlist = data;
  }).done( function(data) {
    updateTreeDepth()
    gArr = new Array();
    linearify(genesis.children);
    exdl(JSON.stringify(genesis.children), 'TREE_'+n+'.json', 'application/json');
    exdl(JSON.stringify(gArr), 'FLAT_'+n+'.json', 'application/json');
  });
}