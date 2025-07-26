import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Github, FileText, Database, BarChart3, Users, ExternalLink } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IL</span>
              </div>
              <span className="font-semibold text-lg">ILID</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#abstract" className="text-gray-600 hover:text-blue-600 transition-colors">
                Abstract
              </a>
              <a href="#dataset" className="text-gray-600 hover:text-blue-600 transition-colors">
                Dataset
              </a>
              <a href="#results" className="text-gray-600 hover:text-blue-600 transition-colors">
                Results
              </a>
              <a href="#download" className="text-gray-600 hover:text-blue-600 transition-colors">
                Download
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4">
            RANLP 2025
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ILID: Native Script Language Identification for Indian Languages
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A comprehensive benchmark dataset and baseline models for identifying English and 22 official Indian
            languages, featuring 230K sentences with state-of-the-art machine learning and deep learning approaches.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <FileText className="w-4 h-4 mr-2" />
              Read Paper
            </Button>
            <Button size="lg" variant="outline">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
            <Button size="lg" variant="outline">
              <Database className="w-4 h-4 mr-2" />
              Download Dataset
            </Button>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section id="abstract" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Abstract</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              Language Identification task is a crucial fundamental step in NLP. Often it serves as a preprocessing step
              for widely used NLP applications such as multilingual machine translation, information retrieval, question
              and answering, and text summarization. The core challenge of language identification lies in
              distinguishing languages in noisy, short, and code-mixed environments.
            </p>
            <p>
              This becomes even harder in case of diverse Indian languages that exhibit lexical and phonetic
              similarities, but have distinct differences. Many Indian languages share the same script making the task
              even more challenging. In this paper, we release a dataset of 230K sentences consisting of English and all
              22 official Indian languages labeled with their language identifiers where data in most languages are
              newly created.
            </p>
            <p>
              We also develop and release robust baseline models using state-of-the-art approaches in machine learning
              and deep learning that can aid the research in this field. Our baseline models are comparable to the
              state-of-the-art models for the language identification task.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Database className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Comprehensive Dataset</CardTitle>
                <CardDescription>230K sentences across 23 languages</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Includes English and all 22 official Indian languages with newly created datasets for 13 languages and
                  curated datasets for the rest.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>State-of-the-art Models</CardTitle>
                <CardDescription>Multiple ML and DL approaches</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ensemble machine learning models, FastText classifiers, and fine-tuned MuRIL models with competitive
                  performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>Open Source</CardTitle>
                <CardDescription>MIT License for research use</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All models and datasets will be released under MIT license to support research in Indian language
                  processing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dataset Section */}
      <section id="dataset" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Dataset Overview</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">ILID Benchmark Dataset</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Total Sentences</span>
                  <Badge variant="secondary">230,000</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Languages Covered</span>
                  <Badge variant="secondary">23 (English + 22 Indian)</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Data Split</span>
                  <Badge variant="secondary">80:10:10 (Train:Dev:Test)</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Per Language</span>
                  <Badge variant="secondary">10,000 sentences</Badge>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Supported Languages</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "Assamese",
                  "Bengali",
                  "Bodo",
                  "Dogri",
                  "English",
                  "Gujarati",
                  "Hindi",
                  "Kannada",
                  "Kashmiri",
                  "Konkani",
                  "Maithili",
                  "Malayalam",
                  "Manipuri",
                  "Marathi",
                  "Nepali",
                  "Odia",
                  "Punjabi",
                  "Sanskrit",
                  "Santali",
                  "Sindhi",
                  "Tamil",
                  "Telugu",
                  "Urdu",
                ].map((lang) => (
                  <Badge key={lang} variant="outline" className="justify-center">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Model Performance</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Best Performing Models</CardTitle>
                <CardDescription>Macro F1 scores on test set</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Voting Ensemble-5</span>
                    <Badge className="bg-green-100 text-green-800">0.99</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Voting Ensemble-1,2,3,4</span>
                    <Badge className="bg-blue-100 text-blue-800">0.96</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">MuRIL (Fine-tuned)</span>
                    <Badge className="bg-purple-100 text-purple-800">0.96</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">FastText</span>
                    <Badge className="bg-orange-100 text-orange-800">0.96</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Model Approaches</CardTitle>
                <CardDescription>Three main methodologies explored</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                    <h4 className="font-semibold text-blue-900">Machine Learning</h4>
                    <p className="text-sm text-blue-700">TF-IDF with ensemble classifiers (SVM, LR, RF, etc.)</p>
                  </div>
                  <div className="p-3 border-l-4 border-green-500 bg-green-50">
                    <h4 className="font-semibold text-green-900">FastText</h4>
                    <p className="text-sm text-green-700">Character n-gram embeddings for fast classification</p>
                  </div>
                  <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                    <h4 className="font-semibold text-purple-900">Deep Learning</h4>
                    <p className="text-sm text-purple-700">Fine-tuned MuRIL for Indian languages</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Download & Access</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            All resources will be made available under MIT license upon paper acceptance. Get access to the dataset,
            trained models, and source code.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Research Paper</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Read the full paper with detailed methodology and results</p>
                <Button className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Paper
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>ILID Dataset</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Download the complete 230K sentence dataset</p>
                <Button className="w-full bg-transparent" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Dataset
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Github className="w-12 h-12 text-gray-800 mx-auto mb-4" />
                <CardTitle>Source Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Access trained models and implementation code</p>
                <Button className="w-full bg-transparent" variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Citation</h2>
          <Card>
            <CardHeader>
              <CardTitle>BibTeX</CardTitle>
              <CardDescription>Cite this work in your research</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                {`@inproceedings{ilid2025,
  title={ILID: Native Script Language Identification for Indian Languages},
  author={Anonymous},
  booktitle={Proceedings of RANLP 2025},
  year={2025},
  publisher={RANLP}
}`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-400">© 2025 ILID Project. Released under MIT License.</p>
          <p className="text-gray-400 mt-2">Submitted to RANLP 2025 • Indian Language Identification Research</p>
        </div>
      </footer>
    </div>
  )
}
