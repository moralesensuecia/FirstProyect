// Objeto 1: Goku niño
let goku = {
  nombre: "Goku Niño",
  vida: 100,
  poder: 95,
  tecnica: "Kamehameha",
  
  atacar: function(enemigo) {
    let daño = Math.floor(Math.random() * 20) + 15; // daño entre 15 y 35
    console.log(`${this.nombre} ataca con ${this.tecnica}! Causa ${daño} de daño`);
    enemigo.vida -= daño;
    console.log(`Vida de ${enemigo.nombre}: ${enemigo.vida}`);
  }
};

// Objeto 2: Piccolo Dai Maku
let piccolo = {
  nombre: "Piccolo Dai Maku",
  vida: 120,
  poder: 90,
  tecnica: "Makosen",

  atacar: function(enemigo) {
    let daño = Math.floor(Math.random() * 25) + 10; // daño entre 10 y 35
    console.log(`${this.nombre} contraataca con ${this.tecnica}! Causa ${daño} de daño`);
    enemigo.vida -= daño;
    console.log(`Vida de ${enemigo.nombre}: ${enemigo.vida}`);
  }
};

// --- EJEMPLO DE BATALLA ---
console.log("¡COMIENZA LA BATALLA!");
console.log(goku);
console.log(piccolo);

console.log("\n--- Turno 1 ---");
goku.atacar(piccolo);

console.log("\n--- Turno 2 ---");
piccolo.atacar(goku);

console.log("\n--- Turno 3 ---");
goku.atacar(piccolo);