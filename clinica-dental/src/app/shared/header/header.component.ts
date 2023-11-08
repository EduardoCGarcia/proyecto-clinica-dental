import { Component, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('nav') navElement!: ElementRef;
  @ViewChild('btnMenuOpen') btnMenuOpenElement!: ElementRef;
  @ViewChild('btnMenuClose') btnMenuCloseElement!: ElementRef;

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

  @Output() toggle = new EventEmitter<void>();


  ngOnInit(): void {
    headerTransparent();
  }

  onToggle(): void {
    this.toggle.emit();
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