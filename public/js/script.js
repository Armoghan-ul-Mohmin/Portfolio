// const images = [
//   "https://media.istockphoto.com/id/1331943958/photo/digital-cloud-security-background-concept.jpg?b=1&s=170667a&w=0&k=20&c=sZPFfiCjMCJhVuHNRFwpKdSsMRvUxjJgpXZm_QYPNSU=",
//   "https://etimg.etb2bimg.com/photo/91152148.cms",
//   "https://media.istockphoto.com/id/1420039900/photo/cyber-security-ransomware-email-phishing-encrypted-technology-digital-information-protected.jpg?b=1&s=170667a&w=0&k=20&c=CnXO_hc7YtdR0CSVwE1bQFQrxBdR_qzfsfLuD8aKhfA=",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYPgZhQxa4NYr9eJpysS1LnpmdmkICxgUnw&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiT4FP50frnt82jNJ3m_Sg9OYdAdM92VGBZQ&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTz7CiJ4cr1gPnytfx1420d5CRQjWz4ZkriQ&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZDRH4Wb3BdV6HHNqbUAgvIovUeFcx333Lvg&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGJ8MmThO5Yxqk2I3Sng59WREBbmhpd22ZQ&usqp=CAU",
//   "https://media.istockphoto.com/id/1384962233/photo/virus-malware-cyber-attack-and-internet-cyber-security-concept.jpg?b=1&s=170667a&w=0&k=20&c=DyW3WIq3RWcrNRZbDeOvpdMM1zZWIsj5Vatt7ay7idE=",
//   "https://thumbs.dreamstime.com/b/cyberattack-concept-faceless-hooded-male-person-using-tablet-computer-low-key-red-blue-lit-image-digital-glitch-effect-133406130.jpg",
//   "https://thumbs.dreamstime.com/b/online-predator-concept-faceless-hooded-male-person-low-key-red-blue-lit-image-digital-glitch-effect-online-predator-133407698.jpg",
//   "https://cdn.pixabay.com/photo/2016/11/07/12/08/cyber-security-1805632__340.png",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpeWZ1-7o4lhxDrQVuRxQZC4g7Ecf_BfVTkwWX7Z9Pxn7YaaOcXKXwdKUZfJlKphJYTUY&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4ccpqoJwsGunBD51WbUuJlqWRVZBQYewrw&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaLiBLG2pHcJ-e0VpRaSkISp9ITvg-aHaUw&usqp=CAU",
//   // 'https://example.com/cybersecurity-image-5.jpg',
// ];

// const randomIndex = Math.floor(Math.random() * images.length);
// const randomImage = images[randomIndex];

// document.querySelector(
//   ".hero-section"
// ).style.backgroundImage = `url(${randomImage})`;

function downloadCV() {
    const url = "assets/files/Armoghan.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }