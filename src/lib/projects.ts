import type { ProjectType } from '@/components/partials/projects'
import {
	carewiseLandingPage1,
	carewiseLandingPage2,
	carewiseLoginPage,
	carewiseTermsAndConditions,
	carewiseCentersPage,
	carewiseFaqs,
	carewiseSuperAdminDashboardPage,
	carewiseAdminDashboardPage,
	carewiseTeacherDashboardPage,
} from './images'

export const carewiseProjects = [
	{ image: carewiseLandingPage1, caption: 'CareWise - Landing Page' },
	{ image: carewiseLandingPage2, caption: 'CareWise - Landing Page' },
	{ image: carewiseLoginPage, caption: 'CareWise - Login Page' },
	{ image: carewiseTermsAndConditions, caption: 'CareWise - Terms and Conditions' },
	{ image: carewiseCentersPage, caption: 'CareWise - Centers Page' },
	{ image: carewiseFaqs, caption: 'CareWise - FAQs' },
	{ image: carewiseSuperAdminDashboardPage, caption: 'CareWise - Super Admin Dashboard Page' },
	{ image: carewiseAdminDashboardPage, caption: 'CareWise - Admin Dashboard Page' },
	{ image: carewiseTeacherDashboardPage, caption: 'CareWise - Teacher Dashboard Page' },
] satisfies ProjectType[]
