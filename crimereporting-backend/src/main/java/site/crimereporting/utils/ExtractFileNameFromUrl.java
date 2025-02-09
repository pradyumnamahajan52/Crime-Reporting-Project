package site.crimereporting.utils;



public class ExtractFileNameFromUrl {
    public String extractFileName(String url) {
        return url.substring(url.lastIndexOf("/") + 1);
    }
}
