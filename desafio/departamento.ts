// Clase Departamento
class Departamento {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  getName(): string {
    return this.nombre;
  }
}

// Clase Piso
class Piso {
  nombre: string;
  private departamentos: Departamento[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.departamentos = [];
  }

  pushDepartamento(departamento: Departamento): void {
    this.departamentos.push(departamento);
  }

  getDepartamentos(): Departamento[] {
    return this.departamentos;
  }
}

// Clase Edificio
class Edificio {
  private pisos: Piso[];

  constructor(pisos: Piso[]) {
    this.pisos = pisos;
  }

  addDepartamentoToPiso(
    nombreDePiso: string,
    departamento: Departamento
  ): void {
    const piso = this.pisos.find(p => p.nombre === nombreDePiso);

    if (!piso) {
      throw new Error(`No existe el piso: ${nombreDePiso}`);
    }

    piso.pushDepartamento(departamento);
  }

  getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
    const piso = this.pisos.find(p => p.nombre === nombreDePiso);

    if (!piso) {
      throw new Error(`No existe el piso: ${nombreDePiso}`);
    }

    return piso.getDepartamentos();
  }
}
function testClaseEdificio(): void {
  const piso1 = new Piso("primer piso");
  const piso2 = new Piso("segundo piso");

  const edificio = new Edificio([piso1, piso2]);

  const depto1 = new Departamento("Depto A");
  const depto2 = new Departamento("Depto B");

  edificio.addDepartamentoToPiso("primer piso", depto1);
  edificio.addDepartamentoToPiso("primer piso", depto2);

  const departamentos = edificio.getDepartamentosByPiso("primer piso");

  console.log(
    departamentos.map(d => d.getName())
  );
}

// Ejecutar el test
testClaseEdificio();

