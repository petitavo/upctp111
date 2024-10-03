export class Patients {
  id: number;
  firstName: string;
  lastName: string;
  photoUrl: string;
  birthDate: string;

  constructor(patients:{Id?: number, FirstName?: string, LastName?: string, PhotoUrl?: string, BirthDate?: string}) {
    this.id = patients.Id || 0;
    this.firstName = patients.FirstName || '';
    this.lastName = patients.LastName || '';
    this.photoUrl = patients.PhotoUrl || '';
    this.birthDate = patients.BirthDate || '';
  }
}
