import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { OurstoryComponent } from './components/ourstory/ourstory.component';
import { CareersComponent } from './components/careers/careers.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { EventsComponent } from './components/events/events.component';
import { RipplenetComponent } from './components/ripplenet/ripplenet.component';
import { LineofcreditComponent } from './components/lineofcredit/lineofcredit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AboutYouComponent } from './about-you/about-you.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { AngularFlexLayoutComponent } from './angular-flex-layout/angular-flex-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutYouComponent,
    PageNotFoundComponent,
    OurstoryComponent,
    CareersComponent,
    BlogsComponent,
    EventsComponent,
    RipplenetComponent,
    LineofcreditComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    VideoPlayerComponent,
    AngularFlexLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    FlexLayoutModule,
    YouTubePlayerModule,
    MatProgressSpinnerModule,
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
