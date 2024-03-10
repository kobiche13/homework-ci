export default function healthBar(char) {
  let statusHealth;
  if (char.health > 50) {
    statusHealth = 'healthy';
  }
  if (char.health < 51 && char.health > 15) {
    statusHealth = 'wounded';
  }
  if (char.health < 16 && char.health > 0) {
    statusHealth = 'critical';
  }
  return statusHealth;
}
