import Background from '../objects/Background';
import Player from '../objects/Player';
import Enemies from '../objects/Enemies';
import Enemy from '../objects/Enemy';
import FlirtyGirl from '../objects/FlirtyGirl';
import FlirtyGirlBullets from '../objects/FlirtyGirlBullets';
import FlirtyGirls from '../objects/FlirtyGirls';
import KissBullet from '../objects/KissBullet';
import Bullet from '../objects/Bullet';
import PlayerBullets from '../objects/PlayerBullets';
import EnemyBullets from '../objects/EnemyBullets';

window.globalObjects = {
  Background        : Background,
  Player            : Player,
  Enemy             : Enemy,
  Enemies           : Enemies,
  Bullet            : Bullet,
  PlayerBullets     : PlayerBullets,
  EnemyBullets      : EnemyBullets,

  FlirtyGirl        : FlirtyGirl,
  FlirtyGirlBullets : FlirtyGirlBullets,
  FlirtyGirls       : FlirtyGirls,
  KissBullet        : KissBullet,

  Utils : {
    titleize    : titleize
  }
};


function titleize( str ) {
  return str.charAt( 0 ).toUpperCase() + str.slice( 1 );
}


export default globalObjects;
