import Background from '../objects/Background';
import Player from '../objects/Player';
import Enemies from '../objects/Enemies';
import Enemy from '../objects/Enemy';
import Bullet from '../objects/Bullet';
import PlayerBullets from '../objects/PlayerBullets';
import EnemyBullets from '../objects/EnemyBullets';

window.globalObjects = {
  Background: Background,
  Player: Player,
  Enemy: Enemy,
  Enemies: Enemies,
  Bullet: Bullet,
  PlayerBullets: PlayerBullets,
  EnemyBullets: EnemyBullets
};

export default globalObjects;
