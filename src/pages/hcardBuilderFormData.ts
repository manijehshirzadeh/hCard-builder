export interface HcardBuilderFormData {
	givenName: string
	surname: string
	email: string
	phone: number | undefined
	streetNumber: number | undefined
	streetName: string
	suburb: string
	state: string
	postCode: number | undefined
	country: string
	imageUrl: string
}
