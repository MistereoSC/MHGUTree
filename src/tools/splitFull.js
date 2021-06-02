var wpnlist;
var finalArr;

function SplitMain(n) {
  switch (n) {
    case 'GSW':
      dlType("Great Sword", "greatsword");
      break;
    case 'LSW':
      dlType("Long Sword","longsword");
      break;
    case 'SNS':
      dlType("Sword and Shield", "swordandshield");      
      break;
    case 'DBL':
      dlType("Dual Blades", "dualblades");
    break;
    case 'HAM':
      dlType("Hammer", "hammer");
    break;
    case 'HHO':
      dlType("Hunting Horn", "huntinghorn");
    break;
    case 'LAN':
      dlType("Lance", "lance");
    break;
    case 'GLA':
      dlType("Gunlance", "gunlance");
    break;
    case 'SAX':
      dlType("Switch Axe", "switchaxe");
    break;
    case 'CBL':
      dlType("Charge Blade", "chargeblade");
    break;
    case 'IGL':
      dlType("Insect Glaive", "insectglaive");
    break;
    case 'LBG':
      dlType("Light Bowgun","lightbowgun");
    break;
    case 'HBG':
      dlType("Heavy Bowgun", "heavybowgun");
    break;
    case 'BOW':
      dlType("Bow", "bow");
    break;
  }
}

function gather(type,full){
  finalArr = new Array();
  for(var i = 0; i<wpnlist.length;i++){
    if(wpnlist[i].wtype == full){
      var tmpWpn = new Object();
      tmpWpn.id = wpnlist[i].id;
      tmpWpn.family = wpnlist[i].family;
      tmpWpn.name = wpnlist[i].name;
      tmpWpn.rarity = wpnlist[i].rarity;
      tmpWpn.attack = wpnlist[i].attack;
      tmpWpn.affinity = wpnlist[i].affinity;
      tmpWpn.defense = wpnlist[i].defense;
      tmpWpn.element = wpnlist[i].element;
      tmpWpn.element_attack =  wpnlist[i].element_attack;
      if(type == "dualblades"){
        tmpWpn.element_2 = wpnlist[i].element_2;
        tmpWpn.element_2_attack = wpnlist[i].element_2_attack;
      }
      tmpWpn.slots =  wpnlist[i].num_slots;

      if(type == "chargeblade" || type == "switchaxe" ){
        tmpWpn.phial =  wpnlist[i].phial;
      }
      if(type == "gunlance"){
        tmpWpn.shelling_type = wpnlist[i].shelling_type;
      }
      if(type == "huntinghorn"){
        tmpWpn.notes = getNotes(wpnlist[i].horn_melodies);
      }
      if(type !== "lightbowgun" && type !== "heavybowgun" && type !== "bow"){
        tmpWpn.sharpness = wpnlist[i].sharpness;
        tmpWpn.sharpness_plus = wpnlist[i].sharpness_plus;
        tmpWpn.sharpness_plus2 = wpnlist[i].sharpness_plus2;
      }
      if(type == "bow"){
        tmpWpn.arc_shot = wpnlist[i].recoil;
        tmpWpn.charges = wpnlist[i].charges.split("|");
        tmpWpn.coatings = getCoatings(wpnlist[i].coatings);

      }
      if(type == "heavybowgun" || type == "lightbowgun"){
        tmpWpn.deviation = wpnlist[i].deviation;
        tmpWpn.reload_speed = wpnlist[i].reload_speed;
        tmpWpn.recoil = wpnlist[i].recoil;
        tmpWpn.rapid_fire = wpnlist[i].rapid_fire;
        tmpWpn.ammo = wpnlist[i].ammo;
        tmpWpn.special_ammo = wpnlist[i].special_ammo;
      }

      tmpWpn.parent_id =  wpnlist[i].parent_id;
      tmpWpn.children =  wpnlist[i].children;
      finalArr.push(tmpWpn);
    }
  }
}

function getCoatings(n) {
  var t = (n>>>0).toString(2);
  var arr = new Array();
  for(var i=0;i<t.length-1;i++){
    if(t[i]=="1") arr.push(true);
    else arr.push(false);
  }
  return arr;
}
function getNotes(n){
  var t = "";
  for(var i=0;i<n.length;i++){
    for(var c=1;c<n[i].song.length;c++){
      if(!t.includes(n[i].song[c])) t+=n[i].song[c];
    }
  }
  var arr = new Array();
  for(var i=0;i<t.length;i++) arr.push(t[i]);
  arr.sort();
  return arr;
}

function download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
function dlType(full, short){
  console.log("Gathering: "+full);
  wpnlist = new Array();
  $.getJSON('../json/origin/_all.json', function (data) {
    wpnlist = data;
  }).done( function(data) {
    gather(short,full)
    download(JSON.stringify(finalArr), 'WPN_'+short+'.json', 'application/json');
  });
}
