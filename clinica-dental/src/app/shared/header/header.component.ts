import { Component, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import { AuthService } from 'src/app/pages/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('nav') navElement!: ElementRef;
  @ViewChild('btnMenuOpen') btnMenuOpenElement!: ElementRef;
  @ViewChild('btnMenuClose') btnMenuCloseElement!: ElementRef;
  @Output() toggle = new EventEmitter<void>();

  role: string | null = null;


  constructor(public authSvc:AuthService){
    this.authSvc.getRole().subscribe(role => this.role = role);
  }


  mostrarMenu() {
    const nav = this.navElement.nativeElement;
    const btnOpen = this.btnMenuOpenElement.nativeElement;
    const btnClose = this.btnMenuCloseElement.nativeElement;

    nav.style.right = '0';
    btnOpen.style.display = 'none'
    btnClose.style.display = "block"
  }

  ocultarMenu() {
    const nav = this.navElement.nativeElement;
    const btnOpen = this.btnMenuOpenElement.nativeElement;
    const btnClose = this.btnMenuCloseElement.nativeElement;

    nav.style.right = '-100%';
    btnOpen.style.display = 'flex'
    btnClose.style.display = "none"
  }

  ngOnInit(): void {
    headerTransparent();
  }

  onToggle(): void {
    this.toggle.emit();
  }
  
  logOut():void {
    this.authSvc.logout();
  }

}

function headerTransparent() {
  const header = document.querySelector("header")!;
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scrollY > 0) {
      header.style.backgroundColor = "rgb(69,69,69,0.5)";
    } else {
      header.style.backgroundColor = "transparent";
      header.style.boxShadow = "none";
    }
  })
}