export class MentalStateExams {
  id: number;
  patientId: number;
  examinerId: number;
  examDate: string;
  orientationScore: number;
  registrationScore: number;
  attentionAndCalculationScore: number;
  recallScore: number;
  languageScore: number;

  constructor(mentalStateExams:{
    id?: number,
    patientId?: number,
    examinerId?: number,
    examDate?: string,
    orientationScore?: number,
    registrationScore?: number,
    attentionAndCalculationScore?: number,
    recallScore?: number,
    languageScore?: number}) {
    this.id = mentalStateExams.id || 0;
    this.patientId = mentalStateExams.patientId || 0;
    this.examinerId = mentalStateExams.examinerId || 0;
    this.examDate = mentalStateExams.examDate || '';
    this.orientationScore = mentalStateExams.orientationScore || 0;
    this.registrationScore = mentalStateExams.registrationScore || 0;
    this.attentionAndCalculationScore = mentalStateExams.attentionAndCalculationScore || 0;
    this.recallScore = mentalStateExams.recallScore || 0;
    this.languageScore = mentalStateExams.languageScore || 0;
  }
}
