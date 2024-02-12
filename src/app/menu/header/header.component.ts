import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MenubarModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    constructor(private route: Router) {

    }

    items: MenuItem[] | undefined;

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
                        command: () => this.route.navigate(['/departments/food-science']),

                            },
                            {
                                label: 'Agricultural Economics',
                        command: () => this.route.navigate(['/departments/food-science']),

                            },
                            {
                                label: 'Arm',
                        command: () => this.route.navigate(['/departments/food-science']),

                            },
                            {
                                label: 'Maths',
                        command: () => this.route.navigate(['/departments/food-science']),

                            },
                            {
                                label: 'Agricultural Statistics',
                        command: () => this.route.navigate(['/departments/food-science']),

                            },
                            {
                                label: 'Computer Science',
                        command: () => this.route.navigate(['/departments/food-science']),

                            },
                            {
                                label: 'Tamil',
                        command: () => this.route.navigate(['/departments/food-science']),

                            },
                            {
                                label: 'English',
                        command: () => this.route.navigate(['/departments/food-science']),

                            },
                        ]
                    },

                ]
            },
            {
                label: 'Academics',
                items: [
                    { label: 'Course Offered' },
                    {
                        label: 'Academic Cell',
                        items: [
                            {
                                label: 'Exams',
                            },
                            {
                                label: 'Rules Regulations',
                            }
                        ]
                    },
                    { label: 'Certificate Courses' },


                    { label: 'NSS | NCC' },
                    {
                        label: 'Publications',
                        items: [
                            {
                                label: 'Newsletters & Brouchers',
                            },
                            {
                                label: 'Books',
                            },
                        ]
                    },
                    {
                        label: 'Committees',
                        items: [
                            {
                                label: 'Students Counselling Cell',
                            },
                            {
                                label: 'Disciplinary Committee',
                            },
                            {
                                label: 'Womens Grievance cell',
                            },
                            {
                                label: 'Reservation Monitoring Cell',
                            },
                            {
                                label: 'Finance Committee',
                            },
                            {
                                label: 'Innovation Cell',
                            },
                            {
                                label: 'IQAC',
                            },
                            {
                                label: 'Waste Disposal committee',
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
                    },
                    {
                        label: 'Yoga',
                    },
                    {
                        label: 'Events',

                        items: [
                            {
                                label: 'Trainings and Events',
                            },
                            {
                                label: 'Functions',
                            },
                            {
                                label: 'Sports',
                            }
                        ]

                    },
                    {
                        label: 'Facilities',
                        items: [
                            {
                                label: 'Library',
                            },
                            {
                                label: 'IT LAB',
                            },
                        ]
                    },

                ]
            },
            {
                label: 'Job Placemnets',
                items: [
                    {
                        label: 'Higer Education & Job Placemnets'
                    }
                ]
            },
            {
                label: 'Contact Us',
                items: [
                    {
                        label: 'Contact Us'
                    }
                ]
            },
        ];
    }


}
