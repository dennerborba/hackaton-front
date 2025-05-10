import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor.model';
import { Cid } from '../models/cid.model';
import { Paciente } from '../models/paciente.model';
import { NomeMedicamento } from '../models/nomeMedicamentos.model';
import { Receita } from '../models/receita.model';
import { ItemReceita } from '../models/itemReceita.model';

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
  private itemReceitaUrl = 'http://localhost:8080/receita_medicamentos';

  getMedicos(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.medicoUrl);
  }
  getMedicoById(idMedico: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(this.medicoUrl + '/' + idMedico);
  }

  getCids(): Observable<Cid[]> {
    return this.httpClient.get<Cid[]>(this.cidUrl);
  }
  getCidById(idCid: number): Observable<Cid> {
    return this.httpClient.get<Cid>(this.cidUrl + '/' + idCid);
  }

  getPacientes(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.pacienteUrl);
  }
  getPacienteById(idPaciente: number): Observable<Paciente> {
    return this.httpClient.get<Paciente>(this.pacienteUrl + '/' + idPaciente);
  }

  getMedicamentos(): Observable<NomeMedicamento[]> {
    return this.httpClient.get<NomeMedicamento[]>(this.nomeMedicamentoUrl);
  }

  postReceita(
    pacienteId: number,
    medicoId: number,
    cidId: number,
    dataEmissao: string,
    observacoes: string
  ): Observable<Receita> {
    return this.httpClient.post<Receita>(this.receitaUrl, {
      paciente_id: pacienteId,
      medico_id: medicoId,
      cid_id: cidId,
      dataEmissao: dataEmissao,
      observacoes: observacoes,
    });
  }

  postItemReceita(
    idReceita: number,
    medicamento: NomeMedicamento,
    quantidade: number,
    dose: string,
    frequencia: number,
    orientacao: string
  ): Observable<ItemReceita> {
    return this.httpClient.post<ItemReceita>(this.itemReceitaUrl, {
      'receita_id' : idReceita,
      'medicamento' : medicamento,
      'quantidade' : quantidade,
      'dose' : dose,
      'frequencia' : frequencia,
      'orientacao' : orientacao
    });
  }

  enviarRelatorioIA(texto: string) {
    return this.httpClient.post<any>('http://localhost:8080/consulta_ia', { texto });
  }
}
