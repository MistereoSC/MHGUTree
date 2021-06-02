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
      genesis.children.push(new TreeItem(wpnlist[i].id, 0, 0, null, gVDepthPointer, null, wpnlist[i], null));
    }
  }
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
class TinyLinearizedItem {
  constructor(item){
    this.id=item.id;
    this.pId=item.parentId;
    this.hD=item.hDepth;
    this.vD=item.vDepth;
    this.gvD=item.globalVDepth;
    this.rvD=item.relativeVDepth;

    this.data=new Object;
    this.data.fam=item.data.family;
    this.data.name=item.data.name;
    this.data.rar=item.data.rarity;
    this.data.atk=item.data.attack;
    this.data.aff=item.data.aff;
    this.data.def=item.data.defense;
    this.data.ele=item.data.element;
    this.data.ele_atk=item.data.element_attack;
    if(item.data.element_2!==null)this.data.ele2=item.data.element_2;
    if(item.data.element_2!==null)this.data.ele2_atk=item.data.element_2_attack;
    this.data.slts=item.data.slots;
    if(item.data.phial!==null)this.data.phl=item.data.phial;
    if(item.data.shelling_type!==null)this.data.shl=item.data.shelling_type;
    if(item.data.notes!==null)this.data.note=item.data.notes;
    if(item.data.sharpness!==null)this.data.sha=item.data.sharpness;
    if(item.data.sharpness_plus!==null)this.data.shap=item.data.sharpness_plus;
    if(item.data.sharpness_plus2!==null)this.data.shapp=item.data.sharpness_plus2;

    if(item.data.arc_shot!==null)this.data.arc=item.data.arc_shot;
    if(item.data.coatings!==null)this.data.coat=item.data.coatings;
    if(item.data.deviation!==null)this.data.dvn=item.data.deviation;
    if(item.data.recoil!==null)this.data.rcl=item.data.recoil;
    if(item.data.reload_speed!==null)this.data.rls=item.data.reload_speed;
    if(item.data.rapid_fire!==null)this.data.rpf=item.data.rapid_fire;
    if(item.data.ammo!==null)this.data.mun=item.data.ammo;
    if(item.data.special_ammo!==null)this.data.s_mun=item.data.special_ammo;
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
function shrink(arr){
  var gArrTiny = new Array()
  for(var i = 0; i<arr.length; i++){
    gArrTiny.push(new TinyLinearizedItem(arr[i]));
  }
  return gArrTiny;
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
    //var gArrTiny = shrink(gArr);
    //exdl(JSON.stringify(gArrTiny), 'SHRUNK_'+n+'.json', 'application/json');
  });
}