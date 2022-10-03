var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = EasyFFTs","category":"page"},{"location":"#EasyFFTs","page":"Home","title":"EasyFFTs","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for EasyFFTs.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [EasyFFTs]","category":"page"},{"location":"#EasyFFTs.easyfft","page":"Home","title":"EasyFFTs.easyfft","text":"easyfft(s)\neasyfft(s, fs)\n\nKeyword arguments\n\nscalebylength::Bool: determines if the response is scaled by its length. Defaults to true.\nf::Function: an optional function to apply elementwise to the response.\n\nCompute the Discrete Fourier Transform (DFT) of the  input vector s, scaling by length(s) by default.  This function uses FFTW.rfft if s has real elements,  and FFTW.fft otherwise.\n\nIf a sampling frequency fs is supplied, the output becomes  a NamedTuple with keys freq and resp, containing the  freqiencues and response respectivly.\n\nThis function offers four main benefits to using the FFTW functions directly:\n\nThe output is scaled by default, making the absolute value of the response \n\ncorrespond directly to the amplitude of the sinusoids that make up the signal.\n\nSimple and short syntax for getting the associated frequencies\nFreqiencies and response are sorted by increasing frequency\nrfft is automatically called for real element vectors, avoiding \n\nthe common newbie mistake of always using fft. Benefits are faster computation  and automtically discarding half of the symmetric spectrum. If you want both  sides of the spectrum, see easymirror.\n\n\n\n\n\n","category":"function"},{"location":"#EasyFFTs.easymirror","page":"Home","title":"EasyFFTs.easymirror","text":"easymirror(v::AbstractVector)\neasymirror(s::NamedTuple)\n\nGiven a one-sided spectrum, return a two-sided version  by \"mirroring\" about 0. This convenience function also  ajusts the amplitude of v, or the amplitudes of s.resp apropriatly.\n\n\n\n\n\n","category":"function"}]
}
