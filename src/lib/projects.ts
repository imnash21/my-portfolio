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

export const catClubCafeProjects = [
	{ image: catClubCafeLandingPagePage1, caption: 'Cat Club Cafe - Landing Page' },
	{ image: catClubCafeLandingPagePage2, caption: 'Cat Club Cafe - Landing Page' },
	{ image: catClubCafeStorePage, caption: 'Cat Club Cafe - Store Page' },
	{ image: catClubCafeStoreViewPage, caption: 'Cat Club Cafe - Store View Page' },
	{ image: catClubCafeCashierPage, caption: 'Cat Club Cafe - Cashier Page' },
	{ image: catClubCafeCashierOrderSubmissionPage, caption: 'Cat Club Cafe - Cashier Order Submission Page' },
	{ image: catClubCafeCashierOrderReceiptPage, caption: 'Cat Club Cafe - Cashier Order Receipt Page' },
	{ image: catClubCafeCashierOrdersPage, caption: 'Cat Club Cafe - Cashier Orders Page' },
	{ image: catClubCafeCashierOrderItemsPage, caption: 'Cat Club Cafe - Cashier Order Items Page' },
	{ image: catClubCafeAdminDashboardPage, caption: 'Cat Club Cafe - Admin Dashboard Page' },
	{ image: catClubCafeProfileSettingsPage, caption: 'Cat Club Cafe - Profile Settings Page' },
] satisfies ProjectType[]
