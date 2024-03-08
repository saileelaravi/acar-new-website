import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AcademicsService } from '../../academics/service/academics.service';
import { MenuService } from '../service/menu.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MenubarModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    pdfUrl$!: any;

    constructor(private route: Router) { }

    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                command: () => this.route.navigate(['']),

                items: [
                    {
                        label: 'About Us',
                        items: [
                            {
                                label: 'ACAR & AEIR Trust',
                                command: () => this.route.navigate(['/menu/about-us'])
                            },
                            // {
                            //     label: 'AEIR Trust',
                            //     command: () =>  this.route.navigate(['/welcome'])
                            // }
                        ]
                    },
                    {
                        label: "Chairperson's Message",
                        command: () => this.route.navigate(['/menu/messages'])
                    },
                    {
                        label: "Principal's Message",
                        command: () => this.route.navigate(['/menu/principal-message'])

                    },
                    // {
                    //     separator: true
                    // },
                    {
                        label: 'Vision , Mision & Goal',
                        command: () => this.route.navigate(['/menu/vision_mision_goal']),

                    },
                    {
                        //     label: 'Mision',
                        // },
                        // {
                        //     label: 'Goal',
                    }
                ]
            },
            {
                label: 'Faculty',
                items: [
                    {
                        label: 'Teaching Faculty',
                        command: () => this.route.navigate(['/menu/teaching_staff']),

                    },
                    {
                        label: 'Non-Teaching',
                        command: () => this.route.navigate(['/menu/non_teaching_staff']),

                    },
                ]
            },
            {
                label: 'Departments',
                items: [
                    {
                        label: 'Crop Management',
                        items: [
                            {
                                label: 'Agronomy',
                                command: () => this.route.navigate(['/departments/agronomy']),

                            },
                            {
                                label: 'Agricultural Engineering',
                                command: () => this.route.navigate(['/departments/agricultural-engineering']),

                            },
                            {
                                label: 'Animal Husbandry',
                                command: () => this.route.navigate(['/departments/animal-husbandry']),

                            }
                        ]
                    },
                    {
                        label: 'Crop Improvement',
                        items: [
                            {
                                label: 'Plant Breeding',
                                command: () => this.route.navigate(['/departments/plant-breeding']),

                            },
                            {
                                label: 'Seed Science',
                                command: () => this.route.navigate(['/departments/seed-science']),

                            },
                            {
                                label: 'Crop Physiology',
                                command: () => this.route.navigate(['/departments/crop-physiology']),

                            },
                            {
                                label: 'Bio Chemistry',
                                command: () => this.route.navigate(['/departments/bio-chemistry']),

                            },
                        ]
                    },
                    {
                        label: 'Crop Protection',
                        items: [
                            {
                                label: 'Agricultural Entromology',
                                command: () => this.route.navigate(['/departments/agriculture-entromology']),

                                // items: [
                                //     {
                                //         label: 'Print',
                                //         icon: 'pi pi-fw pi-print'
                                //     }
                                // ]
                            },
                            {
                                label: 'Plant Pathology',
                                command: () => this.route.navigate(['/departments/plant-pathology']),

                            },
                        ]
                    },
                    {
                        label: 'Natural Resource Management',
                        items: [
                            {
                                label: 'Soil Science',
                                command: () => this.route.navigate(['/departments/soil-science']),

                            },
                            {
                                label: 'Microbiology',
                                command: () => this.route.navigate(['/departments/micro-biology']),

                            },
                            {
                                label: 'Environmental Science',
                                command: () => this.route.navigate(['/departments/environmental-science']),

                            }
                        ]
                    },
                    {
                        label: 'Horticulture',
                        command: () => this.route.navigate(['/departments/horticulture']),

                    },
                    {
                        label: 'Food Science',
                        command: () => this.route.navigate(['/departments/food-science']),

                    },
                    {
                        label: 'Social Science',
                        items: [
                            {
                                label: 'Extension',
                                command: () => this.route.navigate(['/departments/extension']),

                            },
                            {
                                label: 'Agricultural Economics',
                                command: () => this.route.navigate(['/departments/agricultural-economics']),

                            },
                            {
                                label: 'Arm',
                                command: () => this.route.navigate(['/departments/arm']),

                            },
                            {
                                label: 'Maths',
                                command: () => this.route.navigate(['/departments/maths']),

                            },
                            {
                                label: 'Agricultural Statistics',
                                command: () => this.route.navigate(['/departments/maths']),

                            },
                            {
                                label: 'Computer Science',
                                command: () => this.route.navigate(['/departments/computer-science']),

                            },
                            {
                                label: 'Tamil',
                                command: () => this.route.navigate(['/departments/tamil']),

                            },
                            {
                                label: 'English',
                                command: () => this.route.navigate(['/departments/english']),

                            },
                        ]
                    },

                ]
            },
            {
                label: 'Academics',
                items: [
                    {
                        label: 'Course Offered',
                        command: () => this.route.navigate(['/academics/course-offered']),
                    },
                    {
                        label: 'Academic Cell',
                        items: [
                            {
                                label: 'Exams',
                                command: () => this.route.navigate(['/academics/exams']),

                            },
                            {
                                label: 'Rules Regulations',
                                command: () => this.route.navigate(['/academics/rules-regulations']),

                            }
                        ]
                    },
                    {
                        label: 'Certificate Courses',
                        command: () => this.route.navigate(['/academics/certificate-courses']),
                    },


                    {
                        label: 'NSS | NCC',
                        command: () => this.route.navigate(['/academics/nss-ncc']),
                    },
                    {
                        label: 'Publications',
                        items: [
                            {
                                label: 'Newsletters & Brouchers',
                                command: () => this.route.navigate(['/academics/newsletters-brouchers']),

                            },
                            {
                                label: 'Books',
                                command: () => this.route.navigate(['/academics/books']),

                            },
                        ]
                    },
                    {
                        label: 'Committees',
                        items: [
                            {
                                label: 'Students Counselling Cell',
                                // command: (event) => {
                                //     if (event.item && event.item.label) {
                                //         this.logLabelName(event.item.label);
                                //     }
                                // }
                                command: () => this.route.navigate(['/academics', 'committee/students-counselling-cell']),


                            },
                            {
                                label: 'Disciplinary Committee',
                                command: () => this.route.navigate(['/academics', 'committee/disciplinary-commitee']),

                            },
                            {
                                label: 'Womens Grievance cell',
                                command: () => this.route.navigate(['/academics', 'committee/WGC-ACAR']),

                            },
                            {
                                label: 'Reservation Monitoring Cell',
                                command: () => this.route.navigate(['/academics', 'committee/ACAR-Reservation-Monitoring-cell']),

                            },
                            {
                                label: 'Finance Committee',
                                command: () => this.route.navigate(['/academics', 'committee/ACAR-Finance-commitee']),

                            },
                            {
                                label: 'Innovation Cell',
                                command: () => this.route.navigate(['/academics', 'committee/ACAR-Institution-Innovative-Cell']),

                            },
                            {
                                label: 'IQAC',
                                command: () => this.route.navigate(['/academics', 'committee/ACAR-IQAC']),

                            },
                            {
                                label: 'Waste Disposal committee',
                                command: () => this.route.navigate(['/academics', 'committee/WDC-Internal-circular']),

                            },
                        ]
                    },
                ]
            },

            {
                label: 'Life@ACAR',
                items: [
                    {
                        label: 'Hostel',
                        command: () => this.route.navigate(['/life-at-acar/hostel']),

                    },
                    {
                        label: 'Yoga',
                        command: () => this.route.navigate(['/life-at-acar/yoga']),

                    },
                    {
                        label: 'Events',

                        items: [
                            {
                                label: 'Trainings and Events',
                                command: () => this.route.navigate(['/life-at-acar/trainings-and-events']),

                            },
                            {
                                label: 'Functions',
                                command: () => this.route.navigate(['/life-at-acar/Functions']),

                            },
                            {
                                label: 'Sports',
                                command: () => this.route.navigate(['/life-at-acar/Sports']),

                            }
                        ]

                    },
                    {
                        label: 'Facilities',
                        items: [
                            {
                                label: 'Library',
                                command: () => this.route.navigate(['/life-at-acar/Library']),

                            },
                            {
                                label: 'IT LAB',
                                command: () => this.route.navigate(['/life-at-acar/IT-Lab']),

                            },
                        ]
                    },

                ]
            },
            {
                label: 'Job Placemnets',
                command: () => this.route.navigate(['/activites/placements']),

                items: [
                    {
                        label: 'Higer Education & Job Placemnets',
                        command: () => this.route.navigate(['/activites/placements']),

                    }
                ]
            },
            {
                label: 'Contact Us',
                command: () => this.route.navigate(['/contact-us']),
                items: [
                    {
                        label: 'Contact Us',
                        command: () => this.route.navigate(['/contact-us']),

                    }
                ]
            },
        ];
    }

}
