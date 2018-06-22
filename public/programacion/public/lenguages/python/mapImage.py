def mapImage(img, f, inputBounds, outputBounds, inputResolution, outputResolution):

	#Create x and y sampling vectors
	xInput=np.linespace(inputBounds[0], inputBounds[1], inputResolution[1])
	yInput=np.linespace(inputBounds[2], inputBounds[3], inputResolution[0])

	#Put sampling vectors on 2d grid: 
	x,y=np.meshgrid(xInput, yInput)
	z=x+1j*y

	#Evaluate function:
	w=f(z)

	#Linear transformations from complex numbers to pixel indices:
	reSlope = float(outputResolution[1])/(outputBounds[1]-outputBounds[0])
	imSlope = float(outputResolution[0])/(outputBounds[3]-outputBounds[2])
	reIndex = (w.real*reSlope + outputResolution[1]/2).round().astype('int')
	imIndex = (w.imag*imSlope + outputResolution[0]/2).round().astype('int')

	#Create empty new matrix for mapping
	outputImageSize = outputResolution[:]
	outputImageSize.append(3)

	mappedImage = np.empty(outputImageSize)
	mappedImage[:] = NAN
	whiteThresh = 200

	for i in range(inputResolution[0]):
		for j in range(inputResolution[1]):
			if reIndex[i, j] > 0 and reIndex[i, j] < outputResolution[1]:
				if imIndex[i, j] > 0 and imIndex[i, j] < outputResolution[0]:
					#Check if taht pixel has been filled yet:
					if isnan(mappedImage[imIndex[i,j], reIndex[i,j], 0]):
						mappedImage[imIndex[i,j], reIndex[i,j], :] = img[i, j, :]
					#Check if non-white:
					elif img[i, j, 0]< whiteThresh or img[i, j, 1]< whiteThresh or \
						img[i, j, 2:]< whiteThresh:
						mappedImage[imIndex[i,j], reIndex[i,j], :] = img[i, j, :]

	mask = np.zeros((outputResolution[0], outputResolution[1]), dtype='uint8')
	mask[isnan(mappedImage[:, :, 0])] = 1

	mappedImageInt = mappedImage.astype('uint8')

	#Just input central square:
	maskCentral = mask.copy()[75:925, 75:925]
	mappedImageCentral = mappedImageInt.copy()[75:925, 75:925, :]

	dstl = cv2.inpaint(mappedImageCentral, maskCentral, 3, cv2.INPAINT_TELEA)

	return dstl
