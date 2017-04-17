import Background from '../objects/Background';
import Player from '../objects/Player';
import PlayerBullets from '../objects/PlayerBullets';
import Enemies from '../objects/Enemies';
import Enemy from '../objects/Enemy';
import EnemyBullets from '../objects/EnemyBullets';

window.globalObjects = {
  Background: Background,
  Player: Player,
  Enemy: Enemy,
  Enemies: Enemies,
  PlayerBullets: PlayerBullets,
  EnemyBullets: EnemyBullets
};

export default globalObjects;
