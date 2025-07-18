import { ArrowLeft, CheckCircle, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CertificationPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications & Testing</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl">
            Our commitment to quality and environmental standards
          </p>
        </div>

        <Tabs defaultValue="certifications" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="testing">Testing Results</TabsTrigger>
            <TabsTrigger value="standards">Standards</TabsTrigger>
          </TabsList>

          <TabsContent value="certifications" className="pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>CPCB Certification</CardTitle>
                  <CardDescription>Central Pollution Control Board</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=500&query=environmental certification document"
                        alt="CPCB Certificate"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">
                        Certificate Number: AICMT INTERNATIONAL PRIVATE LIMITED/Telangana/578
                      </p>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <p>Verified and Approved</p>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        <FileText className="mr-2 h-4 w-4" />
                        View Full Certificate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>MSME ZED Bronze Certification</CardTitle>
                  <CardDescription>Zero Defect Zero Effect Production</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=500&query=MSME certification document"
                        alt="MSME ZED Certificate"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">
                        Certified under MSME Sustainable (ZED) Certification Scheme
                      </p>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <p>Zero Efficiency Defects Production Process</p>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        <FileText className="mr-2 h-4 w-4" />
                        View Full Certificate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Startup India Recognition</CardTitle>
                  <CardDescription>Ministry of Commerce and Industry</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=500&query=startup india recognition certificate"
                        alt="Startup India Certificate"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Certificate Number: DIPP84553</p>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <p>Recognized by Department of Promotion of Industry and Internal Trade</p>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        <FileText className="mr-2 h-4 w-4" />
                        View Full Certificate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>EPR Registration</CardTitle>
                  <CardDescription>Extended Producer Responsibility</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=500&query=EPR registration certificate"
                        alt="EPR Registration Certificate"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Registered under Plastic Waste Management Rules</p>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <p>Compliant with EPR guidelines</p>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        <FileText className="mr-2 h-4 w-4" />
                        View Full Certificate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="testing" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Testing Results</CardTitle>
                <CardDescription>CIPET Testing Report Summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=800&query=laboratory testing of biodegradable materials"
                      alt="Laboratory Testing"
                      width={800}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Physical Properties</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-2 text-left">Test Parameters</th>
                            <th className="border p-2 text-left">Unit</th>
                            <th className="border p-2 text-left">Results</th>
                            <th className="border p-2 text-left">Requirements as per IS 17088:2021</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border p-2">Thickness</td>
                            <td className="border p-2">μm</td>
                            <td className="border p-2">100</td>
                            <td className="border p-2">Min. 30</td>
                          </tr>
                          <tr>
                            <td className="border p-2">Width</td>
                            <td className="border p-2">mm</td>
                            <td className="border p-2">300</td>
                            <td className="border p-2">As per requirement</td>
                          </tr>
                          <tr>
                            <td className="border p-2">Length</td>
                            <td className="border p-2">mm</td>
                            <td className="border p-2">400</td>
                            <td className="border p-2">As per requirement</td>
                          </tr>
                          <tr>
                            <td className="border p-2">GSM</td>
                            <td className="border p-2">g/m²</td>
                            <td className="border p-2">25</td>
                            <td className="border p-2">As per requirement</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Chemical Properties</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-2 text-left">Test Parameters</th>
                            <th className="border p-2 text-left">Unit</th>
                            <th className="border p-2 text-left">Results</th>
                            <th className="border p-2 text-left">Requirements as per IS 17088:2021</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border p-2">Heavy Metals</td>
                            <td className="border p-2">mg/kg</td>
                            <td className="border p-2">Pass</td>
                            <td className="border p-2">Shall Pass</td>
                          </tr>
                          <tr>
                            <td className="border p-2">Disintegration</td>
                            <td className="border p-2">%</td>
                            <td className="border p-2">Pass</td>
                            <td className="border p-2">Shall Pass</td>
                          </tr>
                          <tr>
                            <td className="border p-2">Ecotoxicity</td>
                            <td className="border p-2">%</td>
                            <td className="border p-2">Pass</td>
                            <td className="border p-2">Shall Pass</td>
                          </tr>
                          <tr>
                            <td className="border p-2">Compostability</td>
                            <td className="border p-2">%</td>
                            <td className="border p-2">Pass</td>
                            <td className="border p-2">Shall Pass</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Biodegradation Results</h3>
                    <p>
                      Percentage biodegradation relative to positive reference: <strong>91.53%</strong>
                    </p>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=600&query=biodegradation graph over time"
                        alt="Biodegradation Graph"
                        width={600}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <Button>
                    <FileText className="mr-2 h-4 w-4" />
                    Download Full Test Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="standards" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Standards</CardTitle>
                <CardDescription>Industry standards and regulations we adhere to</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">IS 17088:2021</h3>
                      <p className="text-gray-500">
                        Indian Standard for specifications and testing methods for compostable plastics
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Physical properties requirements</li>
                        <li>Chemical composition standards</li>
                        <li>Biodegradation testing protocols</li>
                        <li>Ecotoxicity assessment methods</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">ISO 17088:2021</h3>
                      <p className="text-gray-500">International standard for compostable plastics</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Specifications for compostable plastics</li>
                        <li>Testing methods for determining compostability</li>
                        <li>Requirements for packaging recoverable through composting</li>
                        <li>Biodegradation test methods</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Plastic Waste Management Rules</h3>
                      <p className="text-gray-500">Indian government regulations for plastic waste management</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Extended Producer Responsibility (EPR) guidelines</li>
                        <li>Registration requirements for manufacturers</li>
                        <li>Compliance reporting procedures</li>
                        <li>Environmental protection standards</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">ASTM D6400</h3>
                      <p className="text-gray-500">Standard specification for compostable plastics</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Labeling requirements</li>
                        <li>Performance standards</li>
                        <li>Testing methodologies</li>
                        <li>Environmental safety requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
