import { Doctor } from './../../models/doctor.model';
import { Component, OnInit } from '@angular/core';
import { ConnectApiService } from '../../services/connect-api.service';
import { CommonModule } from '@angular/common';
import { Paciente } from '../../models/paciente.model';
import { FormsModule } from '@angular/forms';
import { Cid } from '../../models/cid.model';

@Component({
  selector: 'app-relatorio',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit{

  doctors: Doctor[] =[];
  inputDoctors: string = "Médicos";
  inputPacientes: string = "Pacientes";
  inputCid: string = "Cid";
  pacientes: Paciente[] = [];
  cids: Cid[] = [];


  textoRelatorio: string = '';
  respostaRelatorio: string = '';

  constructor(private service: ConnectApiService){}
  ngOnInit(): void {
    this.service.getMedicos().subscribe({
      next: (value) => {
        this.doctors = value
      },
      error: (err) => {
        console.log("Deu pau meu amigo " + err)
      },
    });

    this.service.getPacientes().subscribe({
      next: (value) => {
        this.pacientes = value;
        console.log(this.pacientes);
      },
      error: (err) => {
        console.log('Deu pau meu amigo ' + err);
      },
    });
    this.service.getCids().subscribe({
      next: (value) => {
        this.cids = value
      },
      error: (err) => {
        console.log("Deu pau meu amigo " + err)
      }
    })

  }

  toggleDropdown(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('hidden');
    }
    console.log(id)
  }

  selecionarDoutor(nome: string): void {
    this.inputDoctors = nome
    this.toggleDropdown("medicos")
  }
  selecionarPaciente(nome: string): void{
    this.inputPacientes = nome
    this.toggleDropdown("pacientes")
  }
  selecionarCid(nome: string): void{
    this.inputCid = nome
    this.toggleDropdown("cid")
  }

  enviarRelatorio(): void {
    if (!this.textoRelatorio.trim()) {
      console.log('O campo de relatório está vazio.');
      return;
    }

    this.service.enviarRelatorioIA(this.textoRelatorio).subscribe({
      next: (resposta) => {
        console.log('Resposta da IA:', resposta);
        this.respostaRelatorio = resposta.resultado || JSON.stringify(resposta);
      },
      error: (err) => {
        console.error('Erro ao enviar relatório:', err);
      }
    });
  }
}
