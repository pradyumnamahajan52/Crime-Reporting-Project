package site.crimereporting.utilsTesting;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import site.crimereporting.utils.ExtractFileNameFromUrl;

public class TestExtractFileNameFromUrl {

    @Test
    public void testingExtractFileName() {
        ExtractFileNameFromUrl extractFileNameFromUrl = new ExtractFileNameFromUrl();
        String url = "https://crime-report-storage.s3.ap-south-1.amazonaws.com/0ff5e178-dfb3-40ae-bfe9-dfd732ed96c9.jpg";
        String expectedFileName = "0ff5e178-dfb3-40ae-bfe9-dfd732ed96c9.jpg";

        String fileName1 = extractFileNameFromUrl.extractFileName(url);
        System.out.println(fileName1);

        // Assert the extracted file name
        assertEquals(expectedFileName, fileName1);
    }
}
