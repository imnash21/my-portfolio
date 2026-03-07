import type { ProjectType } from '@/components/partials/projects'
import {
	// CareWise
	carewiseLandingPage1,
	carewiseLandingPage2,
	carewiseLoginPage,
	carewiseTermsAndConditions,
	carewiseCentersPage,
	carewiseFaqs,
	carewiseSuperAdminDashboardPage,
	carewiseAdminDashboardPage,
	carewiseTeacherDashboardPage,
	// Cat Club Cafe
	catClubCafeLandingPagePage1,
	catClubCafeLandingPagePage2,
	catClubCafeStorePage,
	catClubCafeStoreViewPage,
	catClubCafeCashierPage,
	catClubCafeCashierOrderSubmissionPage,
	catClubCafeCashierOrderReceiptPage,
	catClubCafeCashierOrdersPage,
	catClubCafeCashierOrderItemsPage,
	catClubCafeAdminDashboardPage,
	catClubCafeProfileSettingsPage,
} from './images'

export const carewiseProjects = [
	{ image: carewiseLandingPage1, title: 'CareWise - Landing Page' },
	{ image: carewiseLandingPage2, title: 'CareWise - Landing Page' },
	{ image: carewiseLoginPage, title: 'CareWise - Login Page' },
	{ image: carewiseTermsAndConditions, title: 'CareWise - Terms and Conditions' },
	{ image: carewiseCentersPage, title: 'CareWise - Centers Page' },
	{ image: carewiseFaqs, title: 'CareWise - FAQs' },
	{ image: carewiseSuperAdminDashboardPage, title: 'CareWise - Super Admin Dashboard Page' },
	{ image: carewiseAdminDashboardPage, title: 'CareWise - Admin Dashboard Page' },
	{ image: carewiseTeacherDashboardPage, title: 'CareWise - Teacher Dashboard Page' },
] satisfies ProjectType[]

export const catClubCafeProjects = [
	{ image: catClubCafeLandingPagePage1, title: 'Cat Club Cafe - Landing Page' },
	{ image: catClubCafeLandingPagePage2, title: 'Cat Club Cafe - Landing Page' },
	{ image: catClubCafeStorePage, title: 'Cat Club Cafe - Store Page' },
	{ image: catClubCafeStoreViewPage, title: 'Cat Club Cafe - Store View Page' },
	{ image: catClubCafeCashierPage, title: 'Cat Club Cafe - Cashier Page' },
	{ image: catClubCafeCashierOrderSubmissionPage, title: 'Cat Club Cafe - Cashier Order Submission Page' },
	{ image: catClubCafeCashierOrderReceiptPage, title: 'Cat Club Cafe - Cashier Order Receipt Page' },
	{ image: catClubCafeCashierOrdersPage, title: 'Cat Club Cafe - Cashier Orders Page' },
	{ image: catClubCafeCashierOrderItemsPage, title: 'Cat Club Cafe - Cashier Order Items Page' },
	{ image: catClubCafeAdminDashboardPage, title: 'Cat Club Cafe - Admin Dashboard Page' },
	{ image: catClubCafeProfileSettingsPage, title: 'Cat Club Cafe - Profile Settings Page' },
] satisfies ProjectType[]
