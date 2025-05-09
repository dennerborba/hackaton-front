import { Doctor } from './../../models/doctor.model';
import { Component, OnInit } from '@angular/core';
import { ConnectApiService } from '../../services/connect-api.service';
import { CommonModule } from '@angular/common';
import { Paciente } from '../../models/paciente.model';
@Component({
  selector: 'app-relatorio',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit{

  doctors: Doctor[] =[];
  inputDoctors: string = "Médicos";
  inputPacientes: string = "Pacientes"
  pacientes: Paciente[] = [];

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

  }

  toggleDropdown(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('hidden');
    }
  }

  selecionar(nome: string): void {
    this.inputDoctors = nome
  }

}
