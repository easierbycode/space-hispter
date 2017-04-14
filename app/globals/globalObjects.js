import Background from '../objects/Background';
import Player from '../objects/Player';
import Bullets from '../objects/Bullets';
import Enemies from '../objects/Enemies';
import Enemy from '../objects/Enemy';
import EnemyBullets from '../objects/EnemyBullets';

window.globalObjects = {
  Background: Background,
  Player: Player,
  Bullets: Bullets,
  EnemyBullets: EnemyBullets,
  Enemy: Enemy,
  Enemies: Enemies
};

export default globalObjects;
