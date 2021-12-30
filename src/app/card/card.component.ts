import { Component } from '@angular/core';

const words = ["убица", "крови", "машина", "володя"];
const space = ["", "_", ".", "-", " "];
const images = [
  "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/e9/e939270df656f19fbeab44d29ebf36d93b1dd4d3_full.jpg",
  "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/64/64bb11a82c7752f61a1a6ef65941aa969e4ae28a_full.jpg",
  "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/da/daf23b36a0b7feabe71e06fdaa42eef2952eda95_full.jpg", 
  "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/ff/ffcbf7dbec292fc3fd3f9c759ef5429b0db971b4_full.jpg", 
  "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/ec/ec9c29e89c47adea2977c89ab325c39bfc5e80fd_full.jpg", 
  "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/3e/3ed23adce7c16a67aed9a253422d238294f9dfd4_full.jpg",
  "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/9c/9cc5c77d13af4362f4442f6e826456a55432bff8_full.jpg", 
  "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/ae/ae08f8808d42882799c6177e57183c52e9acfd8a_full.jpg", 
  "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"]

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor() { }
  
  changeNickname() {
    const word = words[Math.floor(Math.random() * words.length)];
    const spaceready = space[Math.floor(Math.random() * space.length)];
    const number = Math.floor(Math.random() * 9999);
    const preset = word + spaceready + word + spaceready + number;
    this.nickname = preset
    this.imageUrl = images[Math.floor(Math.random() * images.length)];
  }

  nickname = 'ТупойНик' + Math.floor(Math.random() * 9999);
  imageUrl = images[Math.floor(Math.random() * images.length)];

  inputHandler(event: any) {
    const value = event.target.value
    this.nickname = value
  }

}
