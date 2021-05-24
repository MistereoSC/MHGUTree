var wpnlist;
var finalArr;

function SplitMain() {
  //dlType("Bow", "bow");
  //dlType("Charge Blade", "chargeblade");
  //dlType("Dual Blades", "dualblades");
  //dlType("Great Sword", "greatsword");
  //dlType("Gunlance", "gunlance");
  //dlType("Hammer", "hammer");
  //dlType("Heavy Bowgun", "heavybowgun");
  //dlType("Hunting Horn", "huntinghorn");
  //dlType("Insect Glaive", "insectglaive");
  //dlType("Lance", "lance");
  //dlType("Light Bowgun","lightbowgun");
  dlType("Long Sword","longsword");
  //dlType("Switch Axe", "switchaxe");
  //dlType("Sword and Shield", "swordandshield");
}

function gather(type,full){
  finalArr = new Array();
  for(var i = 0; i<wpnlist.length;i++){
    if(wpnlist[i].wtype == full){
      var tmpWpn = new Object();
      tmpWpn.id = wpnlist[i].id;
      tmpWpn.family =  wpnlist[i].family;
      tmpWpn.name = wpnlist[i].name;
      tmpWpn.rarity =  wpnlist[i].rarity;
      tmpWpn.attack =  wpnlist[i].attack;
      tmpWpn.affinity =  wpnlist[i].affinity;
      tmpWpn.defense =  wpnlist[i].defense;
      tmpWpn.element =  wpnlist[i].element;
      tmpWpn.element_attack =  wpnlist[i].element_attack;
      tmpWpn.element_2 =  wpnlist[i].element_2;
      tmpWpn.element_2_attack =  wpnlist[i].element_2_attack;
      tmpWpn.slots =  wpnlist[i].num_slots;

      if(type == "chargeblade" || type == "switchaxe" ){
        tmpWpn.phial =  wpnlist[i].phial;
      }
      if(type == "gunlance"){
        tmpWpn.shelling_type = wpnlist[i].shelling_type;
      }
      if(type == "huntinghorn"){
        tmpWpn.horn_melodies = wpnlist[i].horn_melodies;
      }
      if(type !== "lightbowgun" && type !== "heavybowgun" && type !== "bow"){
        tmpWpn.sharpness = wpnlist[i].sharpness;
        tmpWpn.sharpness_plus = wpnlist[i].sharpness_plus;
        tmpWpn.sharpness_plus2 = wpnlist[i].sharpness_plus2;
      }
      if(type == "bow"){
        tmpWpn.coatings = wpnlist[i].coatings;
        tmpWpn.recoil = wpnlist[i].recoil;
        tmpWpn.charges = wpnlist[i].charges;
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
  $.getJSON('../../public/json/origin/_all.json', function (data) {
    wpnlist = data;
  }).done( function(data) {
    gather(short,full)
    alert("Downloading JSON for "+full)
    download(JSON.stringify(finalArr), 'WPN_'+short+'.json', 'application/json');
  });
}
