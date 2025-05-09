import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor.model';
import { Cid } from '../models/cid.model';
import { Paciente } from '../models/paciente.model';
import { NomeMedicamento } from '../models/nomeMedicamentos.model';
import { Receita } from '../models/receita.model';

@Injectable({
  providedIn: 'root',
})
export class ConnectApiService {
  constructor(private httpClient: HttpClient) {}
  private medicoUrl = 'http://localhost:8080/medico';
  private pacienteUrl = 'http://localhost:8080/paciente';
  private nomeMedicamentoUrl = 'http://localhost:8080/nome_medicamentos';
  private cidUrl = 'http://localhost:8080/cid';
  private receitaUrl = 'http://localhost:8080/receita';

  getMedicos(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.medicoUrl);
  };

  getCids(): Observable<Cid[]> {
    return this.httpClient.get<Cid[]>(this.cidUrl);
  };
  getPacientes(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(this.pacienteUrl);
  };
  getMedicamentos(): Observable<NomeMedicamento[]>{
    return this.httpClient.get<NomeMedicamento[]>(this.nomeMedicamentoUrl);
  };

  postReceita(pacienteId: number, medicoId: number, cidId: number, dataEmissao: string, observacoes: string):  Observable<Receita>{
    return this.httpClient.post<Receita>(this.receitaUrl, {
      'paciente_id' : pacienteId,
      'medico_id' : medicoId,
      'cid_id' : cidId,
      'dataEmissao' : dataEmissao,
      'observacoes' : observacoes
    })
  }
}
