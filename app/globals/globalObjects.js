import Background from '../objects/Background';
import Player from '../objects/Player';
import Enemies from '../objects/Enemies';
import Enemy from '../objects/Enemy';
import FlirtyGirl from '../objects/FlirtyGirl';
import FlirtyGirlBullets from '../objects/FlirtyGirlBullets';
import FlirtyGirls from '../objects/FlirtyGirls';
import KissBullet from '../objects/KissBullet';
import Lakitufo from '../objects/Lakitufo';
import Lakitufos from '../objects/Lakitufos';
import Bowser from '../objects/Bowser';
import Bowsers from '../objects/Bowsers';
import BowserFireballs from '../objects/BowserFireballs';
import Bullet from '../objects/Bullet';
import Fireball from '../objects/Fireball';
import PlayerBullets from '../objects/PlayerBullets';
import EnemyBullets from '../objects/EnemyBullets';


window.globalObjects = {
  Background        : Background,
  Player            : Player,
  Enemy             : Enemy,
  Enemies           : Enemies,
  Fireball          : Fireball,
  Bowser            : Bowser,
  Bowsers           : Bowsers,
  BowserFireballs   : BowserFireballs,
  Bullet            : Bullet,
  PlayerBullets     : PlayerBullets,
  EnemyBullets      : EnemyBullets,

  FlirtyGirl        : FlirtyGirl,
  FlirtyGirlBullets : FlirtyGirlBullets,
  FlirtyGirls       : FlirtyGirls,
  KissBullet        : KissBullet,
  Lakitufo          : Lakitufo,
  Lakitufos         : Lakitufos,

  Utils : {
    titleize    : titleize
  }
};


function titleize( str ) {
  return str.charAt( 0 ).toUpperCase() + str.slice( 1 );
}


export default globalObjects;
