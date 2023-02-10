import { DashboardService } from './../../dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit {
  Designation:string="";
  Username:string="";
  NoOfTeamMembers:number=0;
  TotalCostOfAllProject: number=0;
  PedingsTasks:number=0;
  UpCommingProjects:number=0;
  ProjectCost: number=0;

  CurrentExpenditure:number | undefined;
  AvaibleFunds:number | undefined;

  Client: string[] | undefined;
  Projects:string[] | undefined;
  Years:number[] | undefined;
  TeamMembersSumary:any =[];
  TeamMembers:any=[] ;

  Clients:String[] | undefined
  Project:string[] | undefined
  Year:number[] | undefined
  TeamMembersSumarys:any[] | undefined
  TeamMemberss:any[] | undefined

  constructor(private DashboardService: DashboardService)
  {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.Designation ="Team Leader";
    this.Username ="John Smith";
    this.NoOfTeamMembers =67;
    this.TotalCostOfAllProject=240
    this.PedingsTasks=15;
    this.UpCommingProjects=2;
    this.ProjectCost=211333;
    this.CurrentExpenditure=892833;
    this.AvaibleFunds=3453344;

    this.Clients=["ABC Infotech Ltd.","DEF Sotfware Solutions","GHI Industrie"];
    this.Project=["Project A","Project B","Project C","Project D"]
    this.Year=[2019,2018,2017,2016],
    this.TeamMembersSumarys=this.DashboardService.getTeamMembersSummary();
    this.TeamMemberss=[
      {Region:"East",Members:[
        {ID:1 ,Name:"Ford", Status:"Available"},
        {ID:2 ,Name:"Miller", Status:"Available"},
        {ID:3 ,Name:"Jame", Status:"Busy"},
        {ID:4 ,Name:"Jones", Status:"Busy"},
      ]}, {Region:"West",Members:[
        {ID:1 ,Name:"Ford", Status:"Available"},
        {ID:2 ,Name:"Miller", Status:"Available"},
        {ID:3 ,Name:"Jame", Status:"Busy"},
        {ID:4 ,Name:"Jones", Status:"Busy"},
      ]}, {Region:"South",Members:[
        {ID:1 ,Name:"Ford", Status:"Available"},
        {ID:2 ,Name:"Miller", Status:"Available"},
        {ID:3 ,Name:"Jame", Status:"Busy"},
        {ID:4 ,Name:"Jones", Status:"Busy"},
      ]}, {Region:"North",Members:[
        {ID:1 ,Name:"Ford", Status:"Available"},
        {ID:2 ,Name:"Miller", Status:"Available"},
        {ID:3 ,Name:"Jame", Status:"Busy"},
        {ID:4 ,Name:"Jones", Status:"Busy"},
      ]},
    ]

  }
  onProjectChange($event:any){
    if($event.target.innerHTML=="Project A"){
     this.ProjectCost=212222;
     this.CurrentExpenditure=978778;
     this.AvaibleFunds=5445353;
   }else if($event.target.innerHTML=="Project B"){
     this.ProjectCost=212222;
     this.CurrentExpenditure=978778;
     this.AvaibleFunds=5445353;
   }else if($event.target.innerHTML=="Project C"){
     this.ProjectCost=212222;
     this.CurrentExpenditure=978778;
     this.AvaibleFunds=5445353;
   }else{
     this.ProjectCost=212222;
     this.CurrentExpenditure=978778;
     this.AvaibleFunds=5445353;
   }
 }
  }



