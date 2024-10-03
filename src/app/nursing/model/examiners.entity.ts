export class Examiners {
  id: number;
  firstName: string;
  lastName: string;
  nationalProviderIdentifier: string;

  constructor(examiners:{Id?: number, FirstName?: string, LastName?: string, NationalProviderIdentifier?: string}) {
    this.id = examiners.Id || 0;
    this.firstName = examiners.FirstName || '';
    this.lastName = examiners.LastName || '';
    this.nationalProviderIdentifier = examiners.NationalProviderIdentifier || '';
  }
}
